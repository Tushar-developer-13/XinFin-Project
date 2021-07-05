import React, { useCallback } from 'react'
import { Navbar as BaseNavbar } from 'decentraland-dapps/dist/containers'

import { locations } from '../../modules/routing/locations'
import UserMenu from '../UserMenu'
import { Props } from './Navbar.types'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { MenuItem } from 'decentraland-ui'

const Navbar = (props: Props) => {
  const { pathname, onNavigate, isConnected } = props

  if (isConnected) {
    props = { ...props, rightMenu: <UserMenu /> }
  }

  const handleOnSignIn = useCallback(() => {
    onNavigate(locations.signIn())
  }, [onNavigate])

  const handleOnClickAccount = useCallback(() => {
    onNavigate(locations.settings())
  }, [onNavigate])

  return (
    <>
      <div className="ui container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ height: 40 }}
            src="https://xinfin.org/assets/images/brand-assets/xdc-icon.png"
            alt=""
          />
          <div className="nav-item">
            <NavLink exact to="/" activeClassName="nav-item-active">
              XinFin Marketplace
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink exact to="/collections" activeClassName="nav-item-active">
              COLLECTION
            </NavLink>
          </div>
        </div>
      </div>
      {/* <BaseNavbar
      {...props}
      activePage="marketplace"
      isFullscreen={true}
      isSignIn={pathname === locations.signIn()}
      onSignIn={handleOnSignIn}
      onClickAccount={handleOnClickAccount}
    /> */}
    </>
  )
}

export default React.memo(Navbar)
