import React from 'react';
import { Suspense } from 'react';
import TodosList from "./TodosList";

const Todos = ({}) => {
    return (
        <div>
            <Suspense fallback={<p>Loading todos</p>}>
                <h1 className="text-blue-500">Loading todos</h1>
                <div className="flex space-x-2">
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>

            <Suspense fallback={<p>Loading shopping trolley</p>}>
                <h1 className="text-red-500">Loading shopping trolley</h1>
                <div className="flex space-x-2">
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>
        </div>
    );
};

export default Todos;
// by Rokas with ❤️
