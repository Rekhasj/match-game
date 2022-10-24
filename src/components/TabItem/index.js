import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? 'active-tab' : ''

  const onClickTab = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-card">
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
