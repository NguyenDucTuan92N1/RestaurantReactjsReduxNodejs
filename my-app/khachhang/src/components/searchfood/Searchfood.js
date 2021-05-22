import React, { Component } from 'react';

class Searchfood extends Component {
    render() {
        return (
            <div>
                <div id="cover">
                <form method="get" action>
                    <div className="tb">
                    <div className="td"><input type="text" placeholder="Search Food" required /></div>
                    <div className="td" id="s-cover">
                        <button type="submit">
                        <div id="s-circle" />
                        <span />
                        </button>
                    </div>
                    </div>
                </form>
            </div>

            </div>
        );
    }
}


export default Searchfood;