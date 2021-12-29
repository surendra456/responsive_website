import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updatedActiveTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
