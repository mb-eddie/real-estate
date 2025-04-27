import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

const HardwareWalletConnect = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConnect = (walletType: string) => {
    // Placeholder for actual hardware wallet connection logic
    alert(`Connecting to ${walletType} wallet...`);
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00dbe3",
          color: "white",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "uppercase",
          borderRadius: "6px",
          width: "324px",
          height: "45px",
          "&:hover": {
            backgroundColor: "#00c2c7",
          },
        }}
        onClick={handleClick}
      >
        Connect Wallet
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "connect-wallet-button",
        }}
      >
        <MenuItem onClick={() => handleConnect("Trezor")}>
          <Typography>Trezor</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleConnect("Ledger")}>
          <Typography>Ledger</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HardwareWalletConnect;
