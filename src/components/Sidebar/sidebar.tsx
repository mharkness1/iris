import './sidebar.css'

type Props = {
    name: string;
}

const Sidebar: React.FC<Props> = ({ name }) => {

    return (
            <div className="sidebar h-full">

                <div className="text-xl text-center">
                    <p>{name}</p>
                </div>
                </div>
    );
}

export default Sidebar;