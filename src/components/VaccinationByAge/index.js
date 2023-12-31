import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationAge} = props
  return (
    <div className="vaccination-age-container">
      <h1 className="age-heading">Vaccination by age</h1>
      <PieChart width={900} height={400}>
        <Pie
          startAngle={0}
          endAngle={360}
          data={vaccinationAge}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-40" fill="#2d87bb" />
          <Cell name="40-60" fill="#a3df9f" />
          <Cell name="about 60" fill=" #2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="centric"
          verticalAlign="bottom"
          align="center"
          WrapperStyle={{
            fontSize: 20,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
