pub mod actions;
pub mod create;
pub mod create_params;
pub mod delete;
pub mod set_param;
pub mod sync_id;
pub mod update;
pub mod relation;

use crate::generator::prelude::*;

/// Things specific to the type of the model
fn model_type_tokens(model: ModelRef) -> TokenStream {
    match &model.typ {
        ModelType::Relation { item, group } => {
            let item_field = model.field(item.at_index(0).unwrap()).unwrap();
            let item_def = relation::relation_key_definition(item_field, quote!(RelationItem));

            let group_field = model.field(group.at_index(0).unwrap()).unwrap();
            let group_def = relation::relation_key_definition(group_field, quote!(RelationGroup));

            quote! {
                #item_def

                #group_def
            }
        }
        _ => quote!()
    }
}

pub fn generate(model: ModelRef) -> TokenStream {
    if matches!(&model.typ, ModelType::Local {..}) {
        return quote!();
    }
    
	let name_snake = snake_ident(&model.name);

    let model_type_tokens = model_type_tokens(model);

	let set_param_enums = set_param::definition(model);
	let sync_id_struct = sync_id::definition(model);
	let create_params = create_params::definition(model);

	let create_struct = create::generate(model);
	let update_struct = update::generate(&model);
	let delete_struct = delete::generate(&model);

	let actions_struct = actions::generate(&model);

	quote!(
		pub mod #name_snake {
            #model_type_tokens

			#set_param_enums

			#sync_id_struct

			#create_params

			#create_struct

			// #update_struct

			// #delete_struct

			#actions_struct
		}
	)
}
