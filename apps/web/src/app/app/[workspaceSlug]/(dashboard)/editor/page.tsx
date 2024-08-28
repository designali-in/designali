"use client";

import { Editor } from "@designali/editor";

interface EditorProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const EditorProjectIdPage = ({ params }: EditorProjectIdPageProps) => {
  return <Editor />;
};

export default EditorProjectIdPage;
