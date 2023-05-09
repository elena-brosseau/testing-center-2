import './section.css'
import editIcon from '../../assets/edit-text.png'

export function Section({ active, section, onClick, edit, setEdit }) {
    
    return (
      <div 
        data-testid='section'
        onClick={onClick}
        className={active ? 'section-info highlight' : 'section-info'}
      >
        <div>
          <p>{section.name} / {section.professor}</p>
          <p>{section.days.join(', ')} | {section.time}</p>
        </div>
        {edit
        && <div>
            <button onClick={() => setEdit(true)}>
              <img src={editIcon} />
            </button>
          </div>}
      </div>
    )
}