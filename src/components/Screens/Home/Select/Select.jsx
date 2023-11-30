import Dropdown from '../Dropdown/Dropdown';
import './Select.css';

function Select() {

  return (
    <div className="select">
      <Dropdown options={{
        items: [
          { label: 'Киев', id: 'kv' },
          { label: 'Донецк', id: 'dnk' },
          { label: 'Николаев', id: 'nk' },
          { label: 'Днепр', id: 'dnpr' },
        ],
        selectedId: 'dnpr'
      }}/>
    </div>
  )
}
export default Select