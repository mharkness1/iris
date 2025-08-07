/*
<div>
    <button onClick={handleSidebar}>Toggle</button>
    <Sidebar isSidebarOpen={isSidebarOpen}/>
</div>
*/

type Props = {
    isSidebarOpen: boolean,
    handleSidebar: () => void;
}

const Populated: React.FC<Props> = ({ isSidebarOpen, handleSidebar }) => {
  return ()
};

export default Populated;