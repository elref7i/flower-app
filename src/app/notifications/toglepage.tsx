'use client'

import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Card, CardContent } from "@/components/ui/card"
import NotificationHeader from "../features/Notifications/Component/NotificationHeader"
import { Bell } from "lucide-react"

export default function ToggleExample() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="p-4 space-y-4">
      <Toggle
        pressed={isToggled}
        onPressedChange={setIsToggled}
      >
       <Bell />
      </Toggle>

      {isToggled && (
        <Card className="mt-4">
          <CardContent>
         <NotificationHeader />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
