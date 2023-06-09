import './allowedChecklist.css';

export function AllowedChecklist({ allowed, setAllowed }) {

    const options = ['Scrap Paper', 'Dictionary', 'Calculator', 'Formula Sheet', 'Open Book'];

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
        <div className='allowed-options'>
            <p>Allowed Materials:</p>
            {options.map((item, index) => 
                <div key={index} className="checkbox-container">
                    <label>{item}</label>
                    <input
                    type="checkbox"
                    name="allowed"
                    value={item}
                    onChange={handleSelect}
                    defaultChecked={allowed.includes(item)}
                    />
                </div>
            )}
          </div>
    )
}