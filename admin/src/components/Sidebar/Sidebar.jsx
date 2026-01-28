import React from 'react'
import './Sidebar.css'

const Sidebar = ({
  genes,
  geneFilter,
  setGeneFilter,
  statusFilter,
  setStatusFilter,
  keyword,
  setKeyword,
  onClear,
}) => {
  return (
    <div className="orders-layout">
      <aside className="orders-sidebar">
        <h3>Filters</h3>

        <label>Keyword</label>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <label>Gene</label>
        <select value={geneFilter} onChange={(e) => setGeneFilter(e.target.value)}>
          <option value="all">All</option>
          {genes.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <label>Status</label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Order received">Order received</option>
          <option value="Preparing order">Preparing order</option>
          <option value="Sequencing">Sequencing</option>
          <option value="Analyzing results">Analyzing results</option>
          <option value="Completed">Completed</option>
        </select>
        
        <button
          type="button"
          className="clear-filters"
          onClick={onClear}
        >
          Clear
        </button>
      </aside>
    </div>
  )
}

export default Sidebar
