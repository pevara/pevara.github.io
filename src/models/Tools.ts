import {
    mdiAngleAcute,
    mdiSwapHorizontal,
    mdiVectorRectangle,
    mdiVectorTriangle,
    mdiArrowExpandHorizontal,
    mdiCylinder,
    mdiPencilBoxMultipleOutline,
    mdiHistory,
} from '@quasar/extras/mdi-v6';

export type Tool = {
    id: string;
    label: string;
    href: string;
    icon: string;
    children?: Tool[];
};

export const Tools: Tool[] = [
    {
        id: 'triangles',
        label: 'tool_label_triangle',
        href: '/triangles',
        icon: mdiVectorTriangle,
    },
    {
        id: 'spacing',
        label: 'tool_label_spacing',
        href: '/spacing',
        icon: mdiArrowExpandHorizontal,
    },
    {
        id: 'slopes',
        label: 'tool_label_slope',
        href: '/slopes',
        icon: mdiAngleAcute,
    },
    {
        id: 'conversion',
        label: 'tool_label_conversion',
        href: '/conversion',
        icon: mdiSwapHorizontal,
    },
    {
        id: 'surfaces',
        label: 'tool_label_surface',
        href: '/surfaces',
        icon: mdiVectorRectangle,
    },
    {
        id: 'volumes',
        label: 'tool_label_volume',
        href: '/volumes',
        icon: mdiCylinder,
    },
    {
        id: 'notes',
        label: 'tool_label_notes',
        href: '/notes',
        icon: mdiPencilBoxMultipleOutline,
    },
    {
        id: 'history',
        label: 'tool_label_history',
        href: '/history',
        icon: mdiHistory,
    },
];

export const SelectTool = (tools: Tool[], id: string): Tool | undefined =>
    tools.find((tool) => tool.id === id);
