import { Avatar, Card, Flex, Space, Tooltip } from "antd"
import styles from "./blogs.module.less"
import { useNavigate } from "react-router-dom"
import home from "../../assets/image/home.svg"
import mainblog from "../../assets/image/mainBlog.svg"
import link from "../../assets/image/link.svg"
import qq from "../../assets/image/QQ.svg"
import wechat from "../../assets/image/wechat.svg"
import { CSSProperties } from "react"
import getQQava from "../../api/getQQAva"
import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons"
function Blogs() {
  const navigate = useNavigate()
  const active: CSSProperties = {
    background: "#555",
    border: "1px solid #555",
    borderRadius: "5px",
  }

  return (
    <div className={styles.wrapper}>
      <Flex className={styles.menu}>
        <Tooltip title='主页'>
          <img src={home} alt='' onClick={() => navigate("/")} />
        </Tooltip>
        {/* <Tooltip title='关于我'>
            <img src={about} alt='' />
          </Tooltip> */}
      </Flex>

      <Flex className={styles.mainBlog} vertical gap={"large"}>
        <span style={{ fontSize: "3rem", color: "#eee" }}>优秀的Web设计</span>
        <img className={styles.mainblogpic} src={mainblog} alt='' />
        <Flex className={styles.footer} justify='space-between' align='center'>
          <Space size={"large"}>
            <Flex vertical gap={"small"} style={{ color: "#eee" }}>
              <span>作者</span>
              <span>佚名</span>
            </Flex>
            <Flex vertical gap={"small"} style={{ color: "#eee" }}>
              <span>发布于</span>
              <span>1978-3-3</span>
            </Flex>
          </Space>
          <Space size={"small"}>
            <img className={styles.sharepic} src={link} alt='' />
            <img className={styles.sharepic} src={qq} alt='' />
            <img className={styles.sharepic} src={wechat} alt='' />
          </Space>
        </Flex>
      </Flex>
      <Flex className={styles.blogListWrapper} justify='center' align='center'>
        <Flex className={styles.blogList}>
          <Flex
            vertical
            align='flex-start'
            gap={"small"}
            className={styles.unit}>
            <div style={active}>HTML/CSS</div>
            <div>JavaScript/TS</div>
            <div>React</div>
            <div>Vue</div>
            <div>Webpack</div>
            <div>Electron</div>
            <div>Java</div>
            <div>C/C++</div>
          </Flex>
          <Flex wrap='wrap' gap={'small'} className={styles.blogsItem}>
            <Card
              style={{ width: '47%' }}
              className={styles.card}
              size='small'
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <ShareAltOutlined  />,

                <DeleteOutlined />,
              ]}
           >
               
              <Card.Meta
                avatar={
                  <Avatar src={getQQava('2833638386')} />
                }
                title={<span>AI生成网页设计<span style={{fontSize:'0.9rem',color:'#aaa'}}>(作者：Yshinu)</span></span>}
                description='本文介绍了Ai如何生成一个简易的设计稿'
              />
            </Card>
            <Card
              style={{ width: '47%' }}
              size='small'
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <ShareAltOutlined  />,

                <DeleteOutlined />,
              ]}
           >
               
              <Card.Meta
                avatar={
                  <Avatar src={getQQava('2833638386')} />
                }
                title={<span>AI生成网页设计<span style={{fontSize:'0.9rem',color:'#aaa'}}>(Yshinu 2022.02.03)</span></span>}
                description='本文介绍了Ai如何生成一个简易的设计稿'
              />
            </Card>
            <Card
              style={{ width: '47%' }}
              size='small'
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <ShareAltOutlined  />,

                <DeleteOutlined />,
              ]}
           >
               
              <Card.Meta
                avatar={
                  <Avatar src={getQQava('2833638386')} />
                }
                title={<span>AI生成网页设计<span style={{fontSize:'0.9rem',color:'#aaa'}}>(作者：Yshinu)</span></span>}
                description='本文介绍了Ai如何生成一个简易的设计稿'
              />
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Blogs
