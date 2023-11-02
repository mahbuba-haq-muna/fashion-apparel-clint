import "./Toggle.css"

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div>
            <div className=" toggle-container absolute lg:left-48 lg:top-5 ">
                <input type="checkbox"
                    className="toggle"
                    onChange={handleChange}
                    checked={isChecked} />
                <label htmlFor="check"></label>
            </div>
        </div>
    );
};

export default Toggle;