import {
    SiAmazonaws, SiDocker, SiDotnet, SiExpress, SiGit, SiGraphql, SiMicrosoftsqlserver,
    SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript,
} from 'react-icons/si';

const logoFormats = [
    {
        colStart: 'col-start-1 md:col-start-1',
        rowStart: 'row-start-1 md:row-start-1',
        Logo: SiDotnet,
        colSpan: 'col-span-3 md:col-span-2',
        rowSpan: 'row-span-3 md:row-span-2',
        legend: '.NET',
        size: 'lg' as const,
        href: 'https://dotnet.microsoft.com/es-es/',
    },
    {
        colStart: 'col-start-4 md:col-start-3',
        rowStart: 'md:row-start-1',
        Logo: SiNextdotjs,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'NextJS',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        isHighlight: true,
        href: 'https://nextjs.org/',
    },
    {
        colStart: 'col-start-4',
        rowStart: 'row-start-2 md:row-start-1',
        Logo: SiExpress,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'ExpressJS',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://expressjs.com/',
    },
    {
        colStart: 'col-start-1 md:col-start-5',
        rowStart: 'row-start-4 md:row-start-1',
        Logo: SiMysql,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'MySQL',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        isHighlight: true,
        href: 'https://www.mysql.com/',
    },
    {
        colStart: 'col-start-4 md:col-start-6',
        rowStart: 'row-start-6 md:row-start-1',
        Logo: SiDocker,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-3 md:row-span-1',
        legend: 'Docker',
        aspect: 'auto' as const,
        href: 'https://www.docker.com/',
    },
    {
        colStart: 'col-start-1 md:col-start-3',
        rowStart: 'row-start-7 md:row-start-2',
        Logo: SiMongodb,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'MongoDb',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://www.mongodb.com/home',
    },
    {
        colStart: 'col-start-4',
        rowStart: 'row-start-3 md:row-start-2',
        Logo: SiReact,
        colSpan: 'col-span-3 md:col-span-2',
        rowSpan: 'row-span-3 md:row-span-2',
        legend: 'ReactJS',
        size: 'lg' as const,
        isHighlight: true,
        href: 'https://reactjs.org/',
    },
    {
        colStart: 'col-start-4 md:col-start-6',
        rowStart: 'row-start-[10] md:row-start-2',
        Logo: SiPostgresql,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'PostgreSQL',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://www.postgresql.org/',
    },
    {
        colStart: 'col-start-1',
        rowStart: 'row-start-[12] md:row-start-3',
        Logo: SiTailwindcss,
        colSpan: 'col-span-6 md:col-span-2',
        rowSpan: 'row-span-1',
        legend: 'Tailwindcss',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        size: 'wide' as const,
        isHighlight: true,
        href: 'https://tailwindcss.com/',
    },
    {
        colStart: 'col-start-1 md:col-start-3',
        rowStart: 'row-start-6 md:row-start-3',
        Logo: SiMicrosoftsqlserver,
        legend: 'MSSQL',
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    },
    {
        colStart: 'col-start-4 md:col-start-6',
        rowStart: 'row-start-8 md:row-start-3',
        Logo: SiNestjs,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'NestJS',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://nestjs.com/',
    },
    {
        colStart: 'col-start-1 md:col-start-1',
        rowStart: 'row-start-[8] md:row-start-4',
        Logo: SiGit,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-3 md:row-span-1',
        legend: 'Git',
        size: 'wide' as const,
        isHighlight: true,
        href: 'https://git-scm.com/',
    },
    {
        colStart: 'col-start-1 md:col-start-2',
        rowStart: 'row-start-5 md:row-start-4',
        Logo: SiTypescript,
        colSpan: 'col-span-3 md:col-span-2',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'TypeScript',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        size: 'wide' as const,
        isHighlight: true,
        href: 'https://www.typescriptlang.org/',
    },
    {
        colStart: 'col-start-4',
        rowStart: 'row-start-[11] md:row-start-4',
        Logo: SiGraphql,
        colSpan: 'col-span-3 md:col-span-1',
        rowSpan: 'row-span-1 md:row-span-1',
        legend: 'GraphQL',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        href: 'https://graphql.org/',
    },
    {
        colStart: 'col-start-1 md:col-start-5',
        rowStart: 'row-start-[11] md:row-start-4',
        Logo: SiAmazonaws,
        colSpan: 'col-span-3 md:col-span-2',
        rowSpan: 'row-span-1',
        legend: 'AWS',
        aspect: 'auto' as const,
        orientation: 'horizontal' as const,
        size: 'wide' as const,
        href: 'https://aws.amazon.com/',
    },
];

export default logoFormats;
