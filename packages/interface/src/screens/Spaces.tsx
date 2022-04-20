import { useBridgeQuery } from '@sd/client';
import React from 'react';
import ReactJson from 'react-json-view';
import FileItem from '../components/file/FileItem';
import { Tag } from '../components/primitive/Tag';

export const SpacesScreen: React.FC<{}> = (props) => {
  const { data: client } = useBridgeQuery('ClientGetState');
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-2 py-5">
      <div className="mt-2 mb-24 select-text">
        <p className="mb-2 font-medium text-md text-gray-250">Rust level client state:</p>
        <ReactJson
          // collapsed
          enableClipboard={false}
          displayDataTypes={false}
          theme="ocean"
          src={{ ...client }}
          style={{
            padding: 20,
            borderRadius: 5,
            backgroundColor: '#101016',
            border: 1,
            borderColor: '#1E1E27',
            borderStyle: 'solid'
          }}
        />
      </div>
      {/*<div className="-mt-[1px] space-x-2 ml-1">*/}
      {/*  <Tag color="red">Videos</Tag>*/}
      {/*  <Tag color="orange">DSLR Photos</Tag>*/}
      {/*  <Tag color="yellow">Camera Roll</Tag>*/}
      {/*  <Tag color="green">NFTs</Tag>*/}
      {/*  <Tag color="pink">Screenshots</Tag>*/}
      {/*  <Tag color="blue">Documents</Tag>*/}
      {/*  <Tag color="purple">Repositories</Tag>*/}
      {/*</div>*/}
      {/*<div className="flex flex-wrap p-2 my-3 space-x-2 bg-black rounded">*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-950" />*/}
      {/*  <div className="w-10 h-10 bg-gray-900 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-850" />*/}
      {/*  <div className="w-10 h-10 bg-gray-800 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-750" />*/}
      {/*  <div className="w-10 h-10 bg-gray-700 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-650" />*/}
      {/*  <div className="w-10 h-10 bg-gray-600 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-550" />*/}
      {/*  <div className="w-10 h-10 bg-gray-400 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-450" />*/}
      {/*  <div className="w-10 h-10 bg-gray-400 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-350" />*/}
      {/*  <div className="w-10 h-10 bg-gray-300 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-250" />*/}
      {/*  /!* <div className="w-10 h-10 bg-gray-200 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-150" />*/}
      {/*  <div className="w-10 h-10 bg-gray-100 rounded" />*/}
      {/*  <div className="w-10 h-10 rounded bg-gray-50" /> *!/*/}
      {/*</div>*/}
    </div>
  );
};