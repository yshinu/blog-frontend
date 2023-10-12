import styles from "./home.module.less"
import bgHead from "../../assets/image/header.svg"
import { Avatar, Flex, Space, Tooltip } from "antd"
import getQQava from "../../api/getQQAva"
import blogs from "../../assets/image/blogs.svg"
import about from "../../assets/image/about.svg"
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${bgHead})` }}>
        <Flex className={styles.menu}>
          <Tooltip title='博客列表'>
            <img src={blogs} alt='' onClick={()=>navigate('/blogs')}/>
          </Tooltip>
          <Tooltip title='关于我'>
            <img src={about} alt='' />
          </Tooltip>
        </Flex>
        <Space className={styles.header} direction='vertical' size={"middle"}>
          <Avatar
            size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }}
            src={getQQava("1443880381")}
          />
          <span className={styles.name}>Yshinu</span>
          <span className={styles.desc}>你好哈哈</span>
        </Space>
      </div>
      <Space className={styles.footer}>
        <Flex style={{ width: "100vw" }}>
          <Flex className={styles.left} align='center' justify='center'>
            <span style={{ fontSize: "3rem", color: "#eee" }}>
              欢迎来到我的博客
            </span>
          </Flex>
          <Flex className={styles.right} vertical gap={"middle"}>
            <span style={{ fontSize: "1rem", color: "#eee" }}>
              这是一个记录我的学习和生活的地方，希望能够给你带来一些帮助和启发。
            </span>
            <Space>
              <input
                className={styles.input}
                type='text'
                placeholder='搜索博客...'
              />
              <button>搜索</button>
            </Space>
            <span style={{ fontSize: "0.8rem", color: "#eeeeee80" }}>
              分享知识，传递快乐。
            </span>
          </Flex>
        </Flex>
      </Space>
    </>
  )
}

export default Home
