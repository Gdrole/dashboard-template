import React from 'react';

export interface IRoute {
    path: string;
    exact?: boolean;
    name: string;
    component: React.LazyExoticComponent<any>;
}

export interface IRouteGroup {
    groupName: string;
    routes: Array<IRoute>;
}

const PageOne = React.lazy(() => import('./Pages/PageOne'));
const PageTwo = React.lazy(() => import('./Pages/PageTwo'));
const PageThree = React.lazy(() => import('./Pages/PageThree'));
const PageFour = React.lazy(() => import('./Pages/PageFour'));
const PageFive = React.lazy(() => import('./Pages/PageFive'));

const routes: Array<IRouteGroup> = [
    {
        groupName: 'Group 1',
        routes: [
            {
                path: '/path1',
                name: 'Page1',
                component: PageOne
            }
        ]
    },
    {
        groupName: 'Group 2',
        routes: [
            {
                path: '/page2',
                name: 'Page2',
                component: PageTwo
            },
            {
                path: '/page3',
                name: 'Page3',
                component: PageThree
            }
        ]
    },
    {
        groupName: 'Group 3',
        routes: [
            {
                path: '/page4',
                name: 'Page4',
                component: PageFour
            },
            {
                path: '/page5',
                name: 'Page5',
                component: PageFive
            }
        ]
    }
]