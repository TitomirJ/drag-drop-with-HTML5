import React from 'react';

class ListItems extends React.Component {
    render() {
        return (
            <div id="columns" onDragOver={this.props.dragOver}>
                {
                    this.props.blocks.map((block, i) =>
                        <div
                            className='column'
                            data-id={i}
                            draggable="true"
                            onDragEnd={this.props.dragEnd}
                            onDragStart={this.props.dragStart}
                            onDragEnter={this.props.dragEnter}
                            onDragLeave={this.props.dragLeave}
                            onDrop={this.props.handleDrop}
                            key={i}
                        >
                            <header>{block.name}</header>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ListItems;