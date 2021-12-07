import React from "react";
import Link from 'next/head'
import { FaWindows } from "react-icons/fa";
export default function Modal() {
    const handleClick=()=>{
        window.location.href='/Home';
        }
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Press to Confirm
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Order ID# Confirmed
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Your Order of Rupees 2750 is confirmed and is on its way. Happy Shopping! 😍 </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
