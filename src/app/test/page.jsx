import ActionTest from "@/components/Test/ActionTest";
import NavigationTest from "@/components/Test/NavigationTest";

//! two valid way for csr are using useEffect or dynamic import. otherwise page will render twich and causes errors
import dynamic from "next/dynamic";
const RenderingTest = dynamic(() => import("@/components/Test/RenderingTest"), {
  ssr: false,
});

const TestPage = () => {
  return (
    <main className="text-center text-lg leading-loose">
      <h1 className="text-cyan-500 text-xl">Testing Next JS Features</h1>
      {/* rendering test */}
      <RenderingTest />
      {/* navigation test */}
      <NavigationTest />
      {/* action test */}
      <ActionTest />
    </main>
  );
};
export default TestPage;
