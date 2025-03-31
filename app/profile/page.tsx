import Link from "next/link";
import { ArrowLeft, User, Bell, Shield, CreditCard, Plus } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import UserProfile from "@/components/user-profile";
import Navbar from "@/components/mobile-nav";

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-2 inline-flex items-center justify-center rounded-full p-1 bg-[#00a3ff]"
          >
            <ArrowLeft className="h-6 w-6 text-[#ffffff]" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">
            Profile & Settings
          </h1>
        </div>

        <UserProfile />

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2"
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Payment</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    defaultValue="123 Main St, Anytown, USA 12345"
                  />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Manage your account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="currency">Currency</Label>
                    <p className="text-xs text-muted-foreground">
                      Select your preferred currency
                    </p>
                  </div>
                  <div className="w-[180px]">
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>USD (₦)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                      <option>CAD (₦)</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="theme">Theme</Label>
                    <p className="text-xs text-muted-foreground">
                      Choose your preferred theme
                    </p>
                  </div>
                  <div className="w-[180px]">
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>System Default</option>
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Language</Label>
                    <p className="text-xs text-muted-foreground">
                      Select your preferred language
                    </p>
                  </div>
                  <div className="w-[180px]">
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-transactions" className="flex-1">
                        Transaction Updates
                      </Label>
                      <Switch id="email-transactions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-portfolio" className="flex-1">
                        Portfolio Performance
                      </Label>
                      <Switch id="email-portfolio" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-savings" className="flex-1">
                        Savings Goal Updates
                      </Label>
                      <Switch id="email-savings" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-security" className="flex-1">
                        Security Alerts
                      </Label>
                      <Switch id="email-security" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-newsletter" className="flex-1">
                        Weekly Newsletter
                      </Label>
                      <Switch id="email-newsletter" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Push Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-transactions" className="flex-1">
                        Transaction Updates
                      </Label>
                      <Switch id="push-transactions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-portfolio" className="flex-1">
                        Portfolio Performance
                      </Label>
                      <Switch id="push-portfolio" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-savings" className="flex-1">
                        Savings Goal Updates
                      </Label>
                      <Switch id="push-savings" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-security" className="flex-1">
                        Security Alerts
                      </Label>
                      <Switch id="push-security" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-tips" className="flex-1">
                        Financial Tips
                      </Label>
                      <Switch id="push-tips" />
                    </div>
                  </div>
                </div>
                <Button>Save Notification Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-xs text-muted-foreground">
                      Secure your account with 2FA
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Recovery Codes</p>
                    <p className="text-xs text-muted-foreground">
                      Recovery codes can be used to access your account in the
                      event you lose access to your device and cannot receive
                      two-factor authentication codes.
                    </p>
                    <Button variant="outline" size="sm" className="w-fit">
                      View Recovery Codes
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Connected Devices</p>
                    <p className="text-xs text-muted-foreground">
                      Manage devices that are currently logged into your
                      account.
                    </p>
                    <Button variant="outline" size="sm" className="w-fit">
                      Manage Devices
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-primary/10 p-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Visa ending in 4242
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expires 04/2026
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-primary/10 p-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Mastercard ending in 5555
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expires 08/2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Payment Method</span>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Manage your billing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="billing-name">Name</Label>
                  <Input id="billing-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-address">Billing Address</Label>
                  <Input id="billing-address" defaultValue="123 Main St" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="billing-city">City</Label>
                    <Input id="billing-city" defaultValue="Anytown" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-state">State</Label>
                    <Input id="billing-state" defaultValue="CA" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="billing-zip">ZIP Code</Label>
                    <Input id="billing-zip" defaultValue="12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-country">Country</Label>
                    <Input id="billing-country" defaultValue="United States" />
                  </div>
                </div>
                <Button>Save Billing Information</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProfilePage;
