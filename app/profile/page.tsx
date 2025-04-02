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
  // Tabs
  const tabs = [
    { value: "account", icon: User, label: "Account" },
    { value: "notifications", icon: Bell, label: "Notifications" },
    { value: "security", icon: Shield, label: "Security" },
    { value: "payment", icon: CreditCard, label: "Payment" },
  ];

  // Personal information
  const personalInfoFields = [
    {
      id: "first-name",
      label: "First Name",
      defaultValue: "John",
      type: "text",
      colSpan: "md:col-span-1",
    },
    {
      id: "last-name",
      label: "Last Name",
      defaultValue: "Doe",
      type: "text",
      colSpan: "md:col-span-1",
    },
    {
      id: "email",
      label: "Email",
      defaultValue: "john.doe@example.com",
      type: "email",
      colSpan: "md:col-span-2",
    },
    {
      id: "phone",
      label: "Phone Number",
      defaultValue: "+1 (555) 123-4567",
      type: "tel",
      colSpan: "md:col-span-2",
    },
    {
      id: "address",
      label: "Address",
      defaultValue: "123 Main St, Anytown, USA 12345",
      type: "text",
      colSpan: "md:col-span-2",
    },
  ];

  // Preference
  const preferenceOptions = [
    {
      id: "currency",
      label: "Currency",
      description: "Select your preferred currency",
      options: ["USD (₦)", "EUR (€)", "GBP (£)", "JPY (¥)", "CAD (₦)"],
      defaultValue: "USD (₦)",
    },
    {
      id: "theme",
      label: "Theme",
      description: "Choose your preferred theme",
      options: ["System Default", "Light", "Dark"],
      defaultValue: "System Default",
    },
    {
      id: "language",
      label: "Language",
      description: "Select your preferred language",
      options: ["English", "Spanish", "French", "German", "Chinese"],
      defaultValue: "English",
    },
  ];

  // Notification
  const notificationSettings = {
    email: [
      {
        id: "email-transactions",
        label: "Transaction Updates",
        defaultChecked: true,
      },
      {
        id: "email-portfolio",
        label: "Portfolio Performance",
        defaultChecked: true,
      },
      {
        id: "email-savings",
        label: "Savings Goal Updates",
        defaultChecked: true,
      },
      { id: "email-security", label: "Security Alerts", defaultChecked: true },
      {
        id: "email-newsletter",
        label: "Weekly Newsletter",
        defaultChecked: false,
      },
    ],
    push: [
      {
        id: "push-transactions",
        label: "Transaction Updates",
        defaultChecked: true,
      },
      {
        id: "push-portfolio",
        label: "Portfolio Performance",
        defaultChecked: true,
      },
      {
        id: "push-savings",
        label: "Savings Goal Updates",
        defaultChecked: false,
      },
      { id: "push-security", label: "Security Alerts", defaultChecked: true },
      { id: "push-tips", label: "Financial Tips", defaultChecked: false },
    ],
  };

  // Payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      lastFour: "4242",
      expires: "04/2026",
      icon: <CreditCard className="h-4 w-4 text-green-500" />,
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "5555",
      expires: "08/2025",
      icon: <CreditCard className="h-4 w-4 text-yellow-600" />,
    },
  ];

  // Billing
  const billingInfoFields = [
    {
      id: "billing-name",
      label: "Name",
      defaultValue: "John Doe",
      colSpan: "md:col-span-2",
    },
    {
      id: "billing-address",
      label: "Billing Address",
      defaultValue: "123 Main St",
      colSpan: "md:col-span-2",
    },
    {
      id: "billing-city",
      label: "City",
      defaultValue: "Anytown",
      colSpan: "md:col-span-1",
    },
    {
      id: "billing-state",
      label: "State",
      defaultValue: "CA",
      colSpan: "md:col-span-1",
    },
    {
      id: "billing-zip",
      label: "ZIP Code",
      defaultValue: "12345",
      colSpan: "md:col-span-1",
    },
    {
      id: "billing-country",
      label: "Country",
      defaultValue: "United States",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 space-y-4 md:space-y-8 p-4 pt-6 md:p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center">
          <Link
            href="/dashboard"
            className="mr-2 inline-flex items-center justify-center rounded-full p-1"
          >
            <ArrowLeft className="h-6 w-6 text-black" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">
            Profile & Settings
          </h1>
        </div>

        <UserProfile />
        <Tabs
          defaultValue="account"
          className="space-y-4  md:max-w-6xl md:mx-auto"
        >
          <div className="flex justify-center md:h-20 h-24">
            <div className="bg-white rounded-[8px] py-3 px-2 md:py-6 md:px-4  shadow-md border border-gray-300 animate__animated animate__slideInUp ">
              <TabsList className="">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 p-4"
                  >
                    <tab.icon className="h-6 w-6" />
                    <span className="text-base">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent value="account" className="space-y-4">
            {/* Personal Information Card */}
            <Card className="animate__animated animate__slideInUp">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Personal Information
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Update your account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {personalInfoFields.map((field) => (
                    <div key={field.id} className={field.colSpan}>
                      <div className="space-y-2">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          defaultValue={field.defaultValue}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-[#00a3ff]">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Preferences Card */}
            <Card className="animate__animated animate__slideInUp">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Preferences
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Manage your account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {preferenceOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <Label htmlFor={option.id}>{option.label}</Label>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <div className="w-[180px]">
                      <select
                        id={option.id}
                        className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        defaultValue={option.defaultValue}
                      >
                        {option.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                <Button className="bg-[#00a3ff]">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="animate__animated animate__zoomIn">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Notification Settings
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-base font-medium text-[#00a3ff]">
                    Email Notifications
                  </h3>
                  <div className="space-y-2">
                    {notificationSettings.email.map((setting) => (
                      <div
                        key={setting.id}
                        className="flex items-center justify-between"
                      >
                        <Label htmlFor={setting.id} className="flex-1">
                          {setting.label}
                        </Label>
                        <Switch
                          id={setting.id}
                          defaultChecked={setting.defaultChecked}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-medium text-[#00a3ff]">
                    Push Notifications
                  </h3>
                  <div className="space-y-2">
                    {notificationSettings.push.map((setting) => (
                      <div
                        key={setting.id}
                        className="flex items-center justify-between"
                      >
                        <Label htmlFor={setting.id} className="flex-1">
                          {setting.label}
                        </Label>
                        <Switch
                          id={setting.id}
                          defaultChecked={setting.defaultChecked}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="bg-[#00a3ff]">
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            {/* Password Card */}
            <Card className="animate__animated animate__zoomIn">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Password
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Change your password
                </CardDescription>
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
                <Button className="bg-[#00a3ff]">Update Password</Button>
              </CardContent>
            </Card>

            {/* 2FA Card */}
            <Card className="animate__animated animate__zoomIn">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Two-Factor Authentication
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
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
                      event you lose access to your device.
                    </p>
                    <Button className="w-fit bg-[#00a3ff]">
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
                    <Button className="w-fit bg-[00a3ff]">
                      Manage Devices
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            {/* Payment Methods Card */}
            <Card className="animate__animated animate__zoomIn">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Payment Methods
                </CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-purple-100 p-2">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {method.type} ending in {method.lastFour}
                          </p>
                          <p className="text-xs text-red-700">
                            Expires {method.expires}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="flex items-center gap-2 bg-[#00a3ff]">
                  <Plus className="h-5 w-5" />
                  <span>Add Payment Method</span>
                </Button>
              </CardContent>
            </Card>

            {/* Billing Information Card */}
            <Card className="animate__animated animate__zoomIn">
              <CardHeader>
                <CardTitle className="text-lg text-[#00a3ff]">
                  Billing Information
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Manage your billing details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {billingInfoFields.map((field) => (
                    <div key={field.id} className={field.colSpan}>
                      <div className="space-y-2">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          defaultValue={field.defaultValue}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-[#00a3ff]">
                  Save Billing Information
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProfilePage;
