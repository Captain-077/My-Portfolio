import React from 'react'

function Info() {
  return (
    <div className="about__info grid">

<div className="about__box">
<i class='bx bx-award about__icon'></i>
  <h3 className="about__title">Experience</h3>
  <span className="about__subtitle">3+ Years</span>
</div>

<div className="about__box">
<i class='bx bx-briefcase-alt about__icon'></i>
  <h3 className="about__title">Completed</h3>
  <span className="about__subtitle">20+ Projects</span>
</div>

<div className="about__box">
<i class='bx bx-code-alt about__icon'></i>
  <h3 className="about__title">Designed</h3>
  <span className="about__subtitle">150+ websites</span>
</div>

    </div>
  )
}

export default Info