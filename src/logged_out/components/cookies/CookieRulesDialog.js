import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BlackButton from "../../../shared/BlackButton";

const styles = {
  dialogActions: {
    justifyContent: "flex-start"
  },
  dialog: {
    zIndex: 1400
  }
};

function CookieRulesDialog(props) {
  const { classes, onClose, open } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>Our Cookie Policy</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          What Are Cookies
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          How We Use Cookies
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Disabling Cookies
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          The Cookies We Set
        </Typography>
        <Typography paragraph>Account related cookies:</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
        <Typography paragraph>Login related cookies:</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
        <Typography paragraph>Site preferences cookies:</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Third Party Cookies:
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          More Information
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
      </DialogContent>
      <DialogActions className={classNames("py-2 pr-2", classes.DialogActions)}>
        <BlackButton onClick={onClose} variant="contained">
          <ArrowBackIcon className="mr-1" />
          Back
        </BlackButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(CookieRulesDialog);
