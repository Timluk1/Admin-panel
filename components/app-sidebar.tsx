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
    SidebarMenuButton
} from "@/components/ui/sidebar";

import Link from "next/link"

import { User, Settings, LogOut, LayoutDashboard, Activity } from "lucide-react";

import { SettingsDialog } from "./settings-dialog";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open, isMobile } = useSidebar();

    return (
        <Sidebar collapsible="icon" {...props}>
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
                <SettingsDialog />
                <SidebarMenuButton>
                    <LogOut />
                    Logout
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}
