"use client";

import * as React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarTrigger,
    SidebarSeparator,
    useSidebar,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

import Link from "next/link";

import {
    User,
    Settings,
    LogOut,
    LayoutDashboard,
    Activity,
} from "lucide-react";

import { SettingsDialog } from "./settings-dialog";
import { useDialog } from "@/hooks/use-dialog";

export function AppSidebar() {
    const { open, isMobile } = useSidebar();
    const { isOpen, toggleDialog} = useDialog();

    return (
        <Sidebar collapsible="icon">
            <SettingsDialog isOpen={isOpen} onOpenChange={toggleDialog}/>
            
            <SidebarHeader>
                {open && isMobile && <SidebarTrigger />}
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
                    <SidebarSeparator />
                    <SidebarMenuButton>
                        <LayoutDashboard />
                        Dashboard
                    </SidebarMenuButton>
                    <Link href="/users">
                        <SidebarMenuButton>
                            <User />
                            Users
                        </SidebarMenuButton>
                    </Link>
                    <SidebarMenuButton>
                        <Activity />
                        Logs & Monitoring
                    </SidebarMenuButton>
                    <SidebarMenuButton>
                        <Settings />
                        System Settings
                    </SidebarMenuButton>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>

                <SidebarMenuButton onClick={toggleDialog}>
                    <Settings />
                    Settings
                </SidebarMenuButton>

                <SidebarMenuButton>
                    <LogOut />
                    Logout
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}
