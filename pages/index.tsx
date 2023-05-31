import { Header } from '@/features/dashboard';
import { Inter } from 'next/font/google';
import { client } from '@/graphql/apollo';
import { syntomsQuery } from '@/graphql/query';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const inter = Inter({ subsets: ['latin'] });

const Dashboard = ({ labels, values }: any) => {
  const data = labels.map((label: string, index: number) => ({
    name: label[0].toUpperCase() + label.slice(1),
    sintomas: values[index]
  }));

  return (
    <div className={`bg-background w-screen min-h-screen text-foreground font-sans ${inter.className}`}>
      <Header />
      <main
        className='main-grid w-full h-full justify-center grid xl:grid-cols-2 py-14 px-5 xl:px-5 place-items-center'
      >
        <div id="symptoms" className="bg-secondary shadow-lg rounded-lg p-5">
          <h1 className='text-foreground font-sans font-semibold text-xl text-center'>Sintomas de Covid-19</h1>
          <ResponsiveContainer
            width="100%"
            height={400}
            className=' flex justify-center items-center'
          >
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={80}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 10
              }}
            >
              <XAxis dataKey="name" />
              <YAxis dataKey='sintomas' />
              <Tooltip />
              <Legend />

              <Bar dataKey="sintomas" label="Sintomas" fill="#1DA584" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h2>Helllo</h2>
        <h2>Helllo</h2>
      </main>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const data = await client.query({
    query: syntomsQuery,
    variables: {
      startDate: '2022-10-03T10:15:30Z',
      endDate: '2022-12-03T10:15:30Z'
    }
  });

  const [, ...labels] = Object.keys(data.data.countPatientsSymptoms);
  const [, ...values] = Object.values(data.data.countPatientsSymptoms);

  return {
    props: {
      labels,
      values
    }
  };
};
