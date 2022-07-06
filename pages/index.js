import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({resume}) {
  console.log(resume.database[0].img)
  return (
    <>
    <div>
  {/*================Header Menu Area =================*/}

  {/*================Header Menu Area =================*/}
  {/*================Home Banner Area =================*/}
  <section className="home_banner_area">
    <div className="banner_inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="home_left_img">
              <img src={resume.database[0].img} alt />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner_content">
              <h5>{resume.database[0].judul}</h5>
              <h2>{resume.database[0].nama}</h2>
              <p>{resume.database[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Home Banner Area =================*/}
  {/*================Welcome Area =================*/}
  <section className="welcome_area p_120">
    <div className="container">
      <div className="row welcome_inner">
        <div className="col-lg-6">
          <div className="welcome_text">
            <h4>{resume.database[1].judul}</h4>
            <p>{resume.database[1].isi}</p>
            <div className="row">
              <div className="col-md-4">
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        </div>
      </div>
    </div>
  </section>
  {/*================End Welcome Area =================*/}
  {/*================Feature Area =================*/}
  {/*================End Feature Area =================*/}
  {/*================Projects Area =================*/}
  <section className="projects_area p_120">
    <div className="container">
      <div className="main_title">
        <h2>{resume.database[2].judul}</h2>
      </div>
      <div className="projects_inner row">
        <div className="col-lg-4 col-sm-6 brand web">
          <div className="projects_item">
            <img src={resume.database[2].img[0].img1} alt />
            <div className="projects_text">
              <a><h4>{resume.database[2].img[0].text}</h4></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 brand work">
          <div className="projects_item">
            <img src={resume.database[2].img[1].img2} alt />
            <div className="projects_text">
              <a><h4>{resume.database[2].img[1].text}</h4></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 work">
          <div className="projects_item">
            <img src={resume.database[2].img[2].img3} alt />
            <div className="projects_text">
              <a><h4>{resume.database[2].img[2].text}</h4></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Projects Area =================*/}
  {/*================Testimonials Area =================*/}
  {/*================End Testimonials Area =================*/}
  {/*================Latest Blog Area =================*/}
  <section className="latest_blog_area p_120">
    <div className="container">
      <div className="main_title">
        <h2>{resume.database[3].judul}</h2>
        <p>{resume.database[3].text}</p>
      </div>
      <div className="row latest_blog_inner">
        <div className="col-lg-4">
          <div className="l_blog_item">
            <div className="l_blog_img">
              <img className="imgblog" src={resume.database[3].img[0].img4} alt />
            </div>
            <div className="l_blog_text">
              <div className="date">
                <a>{resume.database[3].img[0].waktu}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="l_blog_item">
            <div className="l_blog_img">
              <img className="imgblog" src={resume.database[3].img[1].img5} alt />
            </div>
            <div className="l_blog_text">
              <div className="date">
                <a>{resume.database[3].img[1].waktu}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="l_blog_item">
            <div className="l_blog_img_3">
              <img className='imgblog' src={resume.database[3].img[2].img6} alt />
            </div>
            <div className="l_blog_text">
              <div className="date">
                <a>{resume.database[3].img[2].waktu}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Latest Blog Area =================*/}
  {/*================Footer Area =================*/}
  <footer className="footer_area p_120">
    <div className="container">
      <div className="row footer_inner">
        <div className="col-lg-5 col-sm-6">
          <aside className="f_widget ab_widget">
            <div className="f_title">
              <h3>{resume.database[4].judul}</h3>
            </div>
            <p div className="isi">{resume.database[4].text}</p>
          </aside>
        </div>
        <div className="col-lg-2">
          <aside className="f_widget social_widget">
            <div className="f_title">
              <h3>{resume.database[5].judul}</h3>
            </div>
            <p>{resume.database[5].text}</p>
            <ul className="list">
              <li><a href={resume.database[5].icon[0].url1}><i className={resume.database[5].icon[0].icon1} /></a></li>
              <li><a href={resume.database[5].icon[1].url2}><i className={resume.database[5].icon[1].icon2} /></a></li>
              <li><a href={resume.database[5].icon[2].url3}><i className={resume.database[5].icon[2].icon3} /></a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </footer>
</div>
    </>
  )
}

export async function getServerSideProps(context){
  const linkdb = 'https://uas-backend.herokuapp.com/';
  const respondb = await fetch(linkdb);
  const datajson = await respondb.json();
  
  return{
    props : {
      resume : datajson
    }
  }
}