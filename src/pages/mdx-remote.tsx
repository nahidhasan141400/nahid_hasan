import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function RemoteMdxPage({ mdxSource }: Props) {
  return (
    <div className="max-w-[800px] mx-auto relative shadow-md shadow-blue-300 mt-20 p-10 mb-10 bg-blue-0500">
      <h1 className="text-8xl text-blue-500 mb-10 font-bold">
        Hello My my name is nahid
      </h1>
      <div className="prose  prose-invert">
        <MDXRemote {...mdxSource} />;
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    "https://raw.githubusercontent.com/nahidhasan141400/NH_VIDEO/main/README.md"
  );
  const mdxText = await res.text();
  const mdxSource = await serialize(mdxText, {
    // @ts-ignore
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  return { props: { mdxSource } };
}
