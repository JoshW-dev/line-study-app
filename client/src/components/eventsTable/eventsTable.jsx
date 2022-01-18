import React, { useState } from "react";
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

        </div>
    );
}

export default EventsTable;