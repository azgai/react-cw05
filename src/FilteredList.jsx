import React, { Component } from "react";

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "All"
        };
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    handleType = (e) => {
        this.setState({ type: e.target.value });
    };

    filterItems() {
        return this.props.items.filter((item) => {
            return (
                (this.state.type === "All" || item.type === this.state.type) &&
                item.name.toLowerCase().includes(this.state.search.toLowerCase())
            );
        });
    }

    render() {
        const filtered = this.filterItems();

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.handleSearch}
                />

                <select onChange={this.handleType}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>

                <ul>
                    {filtered.map((item, index) => (
                        <li key={index}>
                            {item.name} ({item.type})
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;