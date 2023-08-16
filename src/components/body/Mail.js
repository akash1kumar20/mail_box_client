import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPencil,
  faInbox,
  faStar,
  faPaperPlane,
  faBookmark,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Mail.css";
import mHeading from "./../../../src/images/logo_gmail_lockup_dark_1x_r5.png";
const Mail = () => {
  return (
    <div className="mailBackground">
      <div className="topPart">
        <h3 className="pt-2 ms-3">
          <FontAwesomeIcon icon={faBars} className="text-white me-3 ms-2" />
          <img src={mHeading} alt="M" height="45px" className="me-4" />
          <input
            type="search"
            placeholder="Search mail"
            className="search text-white"
          />
          <FontAwesomeIcon icon={faUser} className="user" />
        </h3>
      </div>
      <div className="row">
        <div className="col-1 ms-4">
          <div className="icons mt-4">
            <FontAwesomeIcon icon={faPencil} className="mb-3" />
            <br />
            <FontAwesomeIcon icon={faInbox} className="mb-3" />
            <br />
            <FontAwesomeIcon icon={faStar} className="mb-3" />
            <br />
            <FontAwesomeIcon icon={faPaperPlane} className="mb-3" />
            <br />
            <FontAwesomeIcon icon={faBookmark} className="mb-3" />
            <br />
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <div className="col-10 inboxBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde
          dolorem tempora amet impedit magni recusandae voluptatum ex
          reiciendis, tenetur necessitatibus quibusdam blanditiis quia a, non id
          aliquam at cumque expedita totam sit delectus fugiat voluptates! Sed
          perferendis est cumque nihil quos molestiae nesciunt id maiores
          inventore, blanditiis cupiditate, ipsa sint iure dolorum eum facilis
          dolor rerum consectetur! Natus ipsam aliquid sequi sunt quo soluta a
          aspernatur, vitae hic veritatis. Fugiat veniam provident perferendis
          accusantium inventore quam numquam nobis reprehenderit laudantium
          quasi nesciunt sed hic non voluptatum cum, sint cumque vero, tenetur
          impedit vitae cupiditate quae saepe ipsum? Tempore iure minima quia
          harum quisquam rem! Cum deleniti eveniet, modi perferendis nostrum
          officia eligendi rem delectus fugit fuga voluptate corporis sint
          veritatis ipsam molestias, minus doloribus voluptatem animi totam.
          Possimus, tempora? Voluptatem, saepe dolores. Perferendis assumenda
          commodi quidem et! Ducimus nesciunt quidem illo distinctio laudantium
          similique voluptatibus sit dolor, eius, atque nisi asperiores ratione
          laborum tempore? Repellendus quidem sint quasi, odit quod facere vel!
          Animi incidunt architecto enim provident laboriosam, iure laborum
          dolorem praesentium laudantium veritatis facere, voluptatibus
          perspiciatis doloribus repudiandae asperiores quia reprehenderit
          numquam! Nisi error rem quidem veniam non aperiam iusto? Numquam cum
          magni ut libero itaque dicta voluptate ab reiciendis? Ullam, porro
          molestias totam exercitationem id fugiat incidunt commodi in ducimus
          at, iure facilis fuga quasi, ratione soluta ut harum veritatis numquam
          molestiae similique nesciunt saepe esse tenetur! Suscipit placeat
          magnam sequi excepturi culpa facere cupiditate eos id amet odio
          soluta, ipsam explicabo dolorem velit dolorum inventore expedita
          voluptatem dicta! Qui, neque? Cupiditate, et adipisci delectus soluta
          vero perferendis ullam consectetur repudiandae neque velit libero
          placeat. Fugiat pariatur commodi doloribus, nobis reprehenderit iusto
          ad maxime tempora voluptate et reiciendis ipsa sint ratione, in
          suscipit fugit. Eum sed dolor facere nobis, odio, accusantium tempore
          pariatur sunt, quam omnis minus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Veritatis quo laboriosam dignissimos
          voluptates sit asperiores nostrum maxime est vel, perferendis
          accusamus illum ipsa alias itaque amet quam incidunt quibusdam optio
          consectetur minus. Quia enim dolorem quo, necessitatibus corporis
          ullam soluta nemo eaque sapiente eveniet! Sed distinctio, consequuntur
          laudantium quis eius assumenda similique, at amet doloribus sint
          inventore illum voluptatibus nisi quo dolorum sunt veritatis, minus
          est voluptate recusandae atque necessitatibus tempora cumque. Impedit
          nemo est commodi sequi repellendus ipsa molestiae similique officiis
          inventore at ea nisi voluptatum amet molestias placeat unde dicta
          voluptas repudiandae laudantium blanditiis non, dolore tempora animi
          deserunt. Ratione alias laudantium enim temporibus possimus deserunt
          ullam, iure fugit labore autem quae. Consequatur earum officia
          laboriosam impedit est, corrupti dicta sint sapiente error quos eius
          accusantium iste, animi molestiae at soluta minus quasi corporis iusto
          unde ipsam quae! Sunt, iste! Ipsum nobis quia cum, quas voluptate
          fugiat fugit qui ut at eum esse omnis, sit voluptatum doloribus animi,
          eaque saepe sunt rem a quae. Enim necessitatibus, cupiditate quis
          illum aliquam corrupti ullam laborum, cum eius repudiandae hic,
          delectus et cumque consequuntur! Pariatur sed velit veniam maiores?
          Labore maxime odit voluptatem at natus excepturi sit nobis ratione
          ipsam repudiandae.
        </div>
      </div>
    </div>
  );
};

export default Mail;
