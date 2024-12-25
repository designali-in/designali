"use client";

import { Editor } from "deditor";

interface EditorProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const EditorProjectIdPage = ({ params }: EditorProjectIdPageProps) => {
  return (
    <Editor
      initialData={{
        json: "",
        width: 1500,
        height: 1500,
        id: "",
      }}
    />
  );
};

export default EditorProjectIdPage;
