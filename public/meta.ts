interface Meta {
  name?: string
  httpEquiv?: string
  content?: string
};

type MetaData = Meta[];

export const meta: MetaData = [
  {
    name: 'title',
    content: 'Insightcore'
  },
  {
    name: 'description',
    content: 'Insightcore ajuda você a ter uma visão completa da pandemia do COVID-19 no Brasil.'
  },
  {
    name: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
  },
  {
    name: 'theme-color',
    content: '#000000'
  },
  {
    httpEquiv: 'content-language',
    content: 'pt-BR'
  },
  {
    httpEquiv: 'Content-Type',
    content: 'text/html; charset=UTF-8'
  },
  {
    httpEquiv: 'X-UA-Compatible',
    content: 'IE=edge'
  },
  {
    name: 'robots',
    content: 'index, follow'
  },
  {
    name: 'googlebot',
    content: 'index, follow'
  },
  {
    name: 'author',
    content: 'Insightcore'
  },
  {
    name: 'keywords',
    content: 'covid, covid-19, covid19, coronavírus, pandemia, brasil, dados, informações, gráficos, gráficos interativos, gráficos animados, gráficos animados interativos, gráficos animados interativos covid-19'
  }
];
