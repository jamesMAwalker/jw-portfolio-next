import { WORK_DATA } from './data'

import {
  work,
  label,
  content,
  item as itemStyle,
  dates as datesStyle,
  desk,
  mobile,
  description,
  title,
  paragraph,
  techList,
  techListItem
} from '../../../styles/home/01-work.module.scss'

export const WorkExperience = () => {
  return (
    <section className={work}>
      <h3 className={label}>
        Work <br /> Experience
      </h3>
      <div className={content}>
        {WORK_DATA.map((item, idx) => (
          <WorkItem item={item} key={idx} />
        ))}
      </div>
    </section>
  )
}

function WorkItem({ item }) {
  return (
    <div className={itemStyle}>
      <div className={`${datesStyle} ${desk}`}>
        <span>{item.dates.end}</span>
        <span>{item.dates.start}</span>
      </div>
      <div className={description}>
        <h3 className={title}>{item.title}</h3>
        <div className={`${datesStyle} ${mobile}`}>
          <span>{item.dates.start}</span>
          <span>-</span>
          <span>{item.dates.end}</span>
        </div>
        <p className={paragraph}>{item.description}</p>
        <ul className={techList}>
          {item.techList.map((listItem) => {
            return (
              <li className={techListItem} key={listItem}>
                {listItem}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
