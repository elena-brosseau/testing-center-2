import './allowedChecklist.css';

export function AllowedChecklist({ allowed, setAllowed }) {

    const options = ['Scrap Paper', 'Dictionary', 'Calculator', 'Open Book', 'Other'];

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setAllowed(
          checked
            ? [...allowed, value]
            : allowed.filter((item) => item !== value)
       );
      };


    return (
        <div>
            <p>Allowed Materials:</p>
            {options.map((item, index) => 
                <div key={index} className="checkbox-container">
                    <input
                    type="checkbox"
                    name="allowed"
                    value={item}
                    onChange={handleSelect}
                    defaultChecked={allowed.includes(item)}
                    />
                    <label>{item}</label>
                </div>
            )}
          </div>
    )
}