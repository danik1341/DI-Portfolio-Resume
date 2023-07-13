import React from "react";

type ContentType = {
  [key: string]: (obj: any) => React.ReactNode;
};

export default function DescriptionMap(props: any) {
  const { list, type } = props;

  const contentDisplay: ContentType = {
    links: (obj: any) => (
      <a
        className="text-sky-400 cursor-pointer"
        href={obj.link}
        target="_blank"
      >
        {obj.content}
      </a>
    ),
    skills: (obj: any) => <p>{obj.content.join(", ")}</p>,
  };

  return (
    <div className="flex flex-col space-y-3">
      {list.map((listItem: any, listIndex: any) => {
        return (
          <div
            key={listIndex}
            className="flex items-center space-x-1.5 flex-wrap text-sm relative group overflow-hidden"
          >
            <div className="bg-sky-600 h-[2px] w-full absolute right-full bottom-0 duration-500 group-hover:translate-x-full"></div>
            <p>
              <b>{listItem.name}</b>
            </p>
            {contentDisplay[type](listItem)}
          </div>
        );
      })}
    </div>
  );
}
