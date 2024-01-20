import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onActiveTabStyles = isActive ? 'active-btn' : ''

  const onActiveTab = () => {
    getActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`button ${onActiveTabStyles}`}
        type="button"
        onClick={onActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
