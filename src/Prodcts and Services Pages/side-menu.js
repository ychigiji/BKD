import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
      <div>
        <h1 class="menu">Gallery</h1>
        <div class="listgroup">
          <a href="/products/architecture" class="list-group-item">
            Architecural House Plans
          </a>
          <a href="/products/businesscards" class="list-group-item">
            Business Cards
          </a>
          <a href="/products/banners" class="list-group-item">
            Banners
          </a>
          <a href="/products/mugs" class="list-group-item">
            Coffee Mugs
          </a>
          <a href="/products/face" class="list-group-item">
            Covid-19 Face Shields
          </a>
          <a href="/products/printing" class="list-group-item">
            Document Printing & Binding
          </a>
          <a href="/products/frames" class="list-group-item">
            Frame Signboard Systems
          </a>
          <a href="/products/gazebos" class="list-group-item">
            Gazebos
          </a>
          <a href="/products/keyrings" class="list-group-item">
            Keyrings
          </a>
          <a href="/products/labels" class="list-group-item">
            Labels & Stickers
          </a>
          <a href="/products/photo" class="list-group-item">
            Photo Panels
          </a>
          <a href="/products/signs" class="list-group-item">
            Signboards
          </a>
          <a href="/products/shirts" class="list-group-item">
            Tshirts & Fabrics
          </a>
          <a href="/products/vehicle" class="list-group-item">
            Vehicle Graphics & Lettering
          </a>
        </div>
      </div>
    );
  }
}
export default SideMenu;
