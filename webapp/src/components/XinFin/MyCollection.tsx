import { Hero, Grid, Modal, Input, TextArea, Button } from 'decentraland-ui'
import React from 'react'
import { request, gql } from 'graphql-request'
import { NavLink } from 'react-router-dom'
interface IProps {}
const itemSchema = {
  name: '',
  description: '',
  imgData: null,
  imgUrl: ''
}
const query = gql`
  {
    nfts {
      id
    }
  }
`
const MyCollection: React.FC<IProps> = props => {
  const [collections, setCollections] = React.useState<typeof itemSchema[]>([])
  const [tempItem, setTempItem] = React.useState(itemSchema)
  const [modal, setModal] = React.useState(true)
  const handleClose = () => {
    setModal(false)
    setTempItem(itemSchema)
  }
  const handleAddCollection = () => {
    setModal(true)
  }
  const handleViewCollection = () => {}
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTempItem({ ...tempItem, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    collections.push(tempItem)
    handleClose()
  }
  const handleFileUpload = (e: any) => {
    setTempItem({
      ...tempItem,
      imgData: e.target.files[0]
    })
  }
  React.useEffect(() => {
    request(
      'http://13.233.101.71:8000/subgraphs/name/hansrajrami/erc721',
      query,
      null
    ).then(data => console.log(data))
  }, [])
  return (
    <>
      <Modal onClose={handleClose} open={modal}>
        <div style={{ textAlign: 'center', padding: '15px 30px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ width: 25 }}></div>
            <div style={{ fontSize: 24 }}>
              <b> New Collection</b>
            </div>
            <i
              onClick={handleClose}
              className="fa fa-close"
              style={{ color: 'red', fontSize: 32, cursor: 'pointer' }}
            ></i>
          </div>
          <div>
            <div
              className="normal-font"
              style={{ margin: '40px 0px 35px 0px' }}
            >
              Logo
            </div>
            <div
              className="upload-btn-wrapper"
              style={{
                border: '1px dotted #fff',
                borderRadius: 5,
                margin: '0px auto',
                height: 100,
                width: 100
              }}
            >
              <input
                accept="image/png, image/jpeg"
                type="file"
                onChange={handleFileUpload}
              />
              <img
                style={{
                  height: 100,
                  width: 100,
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
                src={
                  tempItem.imgData
                    ? URL.createObjectURL(tempItem.imgData)
                    : 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png'
                }
                alt=""
              />
            </div>
          </div>
          <div className="modal-input-div">
            <div className="normal-font" style={{ marginRight: 20 }}>
              Name
            </div>
            <input
              name="name"
              onChange={handleChange}
              placeholder="name"
              style={{ width: '100%', padding: '2px 5px' }}
            />
          </div>
          <div className="modal-input-div">
            <div className="normal-font" style={{ marginRight: 20 }}>
              Description
            </div>
            <textarea
              name="description"
              onChange={handleChange}
              placeholder="Provide description of the store"
              style={{ width: '100%', padding: '2px 5px' }}
              rows={5}
            />
          </div>
          <Button onClick={handleSubmit} style={{ margin: '20px 0px' }}>
            Procced
          </Button>
        </div>
      </Modal>
      <Grid container>
        <div style={{ width: '30%', borderRight: '1px solid #fff' }}>
          <div className="side-nav">
            <div>
              <NavLink to="collections" activeClassName="side-nav-active">
                <i className="fa fa-copy"></i>
                <span>My Collection</span>
              </NavLink>
            </div>
            <div>
              <NavLink to="/payout" activeClassName="side-nav-active">
                <i className="fa fa-dollar"></i>
                <span>My Payout</span>
              </NavLink>
            </div>
            <div>
              <NavLink to="/help" activeClassName="side-nav-active">
                <i className="fa fa-info-circle"></i>
                <span>Community & Help</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div style={{ width: '70%', paddingLeft: 0 }}>
          <div
            style={{
              borderBottom: '1px solid #fff',
              paddingLeft: 12,
              paddingBottom: 12
            }}
          >
            <h2>My Collection</h2>
            <div className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem
              rerum numquam fuga reprehenderit quibusdam iste atque placeat?
              Possimus amet autem aspernatur voluptatum harum eum tenetur est
              cumque alias quisquam, quaerat, quae sequi culpa, magnam sed?
              Molestiae ipsam, illum eveniet saepe impedit dignissimos quis
              nostrum! Dolorem nesciunt quidem cum, quo facere officiis placeat.
              Sequi qui quasi consectetur sit
            </div>
          </div>
          <div className="collections">
            <div className="collection">
              {' '}
              <div>
                <i
                  onClick={handleAddCollection}
                  className="fa fa-plus fa-2x"
                ></i>
                <b>Create New Collection</b>
              </div>{' '}
            </div>
            {collections.map(collection => (
              <div className="collection">
                <div>
                  <img
                    style={{ height: 100, width: 100 }}
                    src={URL.createObjectURL(collection.imgData)}
                    alt=""
                  />
                  <b>{collection.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </>
  )
}
export default MyCollection
