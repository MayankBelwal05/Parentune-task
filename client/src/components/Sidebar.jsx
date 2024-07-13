

const Sidebar = (sections, handleScroll) => {


    return (
        <div className="sidebar">
            {sections.map((section, index) => {
                <button key={index} onClick={() => handleScroll(index)} >
                    {section.title}
                </button>
            })}

        </div>
    )
}

export default Sidebar