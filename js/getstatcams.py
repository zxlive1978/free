#!/usr/bin/env python
## -*- coding: utf-8 -*-
import sys

import subprocess

def getstatcams(host, port, timeout, retry_interval, reset_vpn_host):
   
			subprocess.call(["curl", "-s", "-X", "POST", "https://api.telegram.org/bot885329435:AAHTWnyjFEzy_NMp4Os64Y8V_vmECgdimQA/sendMessage", "-d", "chat_id="+chat_id, "-d", "text="+message])
			
			print (reset_vpn_host+ ": good reboot! ")
			
      

getstatcams(sys.argv[1],"22",20,5, sys.argv[1])

