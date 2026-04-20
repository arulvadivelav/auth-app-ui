import React, { useState } from 'react';
import '../styles/components/SearchSection.css';

const SearchSection = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    gender: '',
    age: '',
    religion: '',
    location: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(filters);
  };

  return (
    <section className="search-section">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-row">
            <input
              type="text"
              name="keyword"
              placeholder="Search by name or keyword..."
              className="search-input"
              value={filters.keyword}
              onChange={handleChange}
            />
          </div>
          <div className="filters-row">
            <select name="gender" value={filters.gender} onChange={handleChange}>
              <option value="">All Genders</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <select name="age" value={filters.age} onChange={handleChange}>
              <option value="">All Ages</option>
              <option value="18-25">18-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
              <option value="36-40">36-40</option>
              <option value="40+">40+</option>
            </select>
            <select name="religion" value={filters.religion} onChange={handleChange}>
              <option value="">Religion/Caste</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="sikh">Sikh</option>
              <option value="buddhist">Buddhist</option>
              <option value="jain">Jain</option>
            </select>
            <select name="location" value={filters.location} onChange={handleChange}>
              <option value="">Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
            </select>
            <button type="submit" className="btn-primary btn-search">
              🔍 Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;