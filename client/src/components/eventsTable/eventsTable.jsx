import React, { useState } from "react";
import './eventsTable.css'
import { Table } from 'antd';

function EventsTable(params) {
    const dataSource = params.events;

    const columns = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Start',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: 'End',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Tag',
            dataIndex: 'tag',
            key: 'tag',
        },
        {
            title: 'Speed',
            dataIndex: 'speed',
            key: 'speed',
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
        },
    ];
    return (
        <div >
            <h3>Events List</h3>
            <Table dataSource={dataSource} columns={columns} />;

<div className="table-row">
        <div>Type</div>
        <div>Tag</div>
        <div>Start</div>
        <div>End</div>
        <div>Duration</div>
        <div>Speed</div>
        <div>Notes</div>

</div>
            <div class="grid-container">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
            </div>
        </div>
    );
}

export default EventsTable;