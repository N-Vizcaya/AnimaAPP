import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit cum, 
            vestibulum eu litora tincidunt est porttitor ante quis cras, 
            tortor sagittis phasellus a senectus risus fusce. 
            Venenatis velit enim volutpat molestie rhoncus ornare 
            tincidunt ac quis ullamcorper nec, diam sagittis 
            neque id imperdiet tellus condimentum ante aptent commodo pharetra, 
            massa rutrum class iaculis vestibulum nisl aenean risus eros integer. 
            Pellentesque ridiculus non justo interdum curae cras tristique himenaeos tellus, 
            leo semper placerat sollicitudin magna purus lectus mollis proin, 
            sodales ultrices ac enim laoreet venenatis taciti mattis.Taciti metus 
            tempor nostra blandit ut elementum commodo mi, ac posuere ultrices etiam conubia penatibus. 
            Id conubia 
            libero morbi integer turpis vulputate fusce pharetra nibh vel, lacinia facilisi 
            donec lacus vitae ac nec facilisis eu, praesent pellentesque ante egestas magna 
            ullamcorper sapien lobortis class. Egestas aenean purus risus ultricies mollis 
            augue ornare, conubia leo nibh porta maecenas placerat, pulvinar ullamcorper 
            nullam imperdiet nec ante.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;