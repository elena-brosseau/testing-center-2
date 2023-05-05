import './section.css'

export function Section({ active, section, onClick}) {
    
    return (
      <div 
        data-testid='section'
        onClick={onClick}
        className={active ? 'section-info highlight' : 'section-info'}
      >
        <p>{section.name} / {section.professor}</p>
        <p>{section.days.join(', ')} | {section.time}</p>
      </div>
    )
}