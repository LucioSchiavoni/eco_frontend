import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createCategory, createSubCategory, getCategory } from '@/api/prodcut'

export default function FormCategories() {
  const [categoryName, setCategoryName] = useState('')
  const [subcategoryName, setSubcategoryName] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const queryClient = useQueryClient()

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategory,
  })

  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      setSuccess(data.message)
      setCategoryName('')
    },
    onError: () => {
      setError('Error al crear categoría')
    },
  })

  const createSubcategoryMutation = useMutation({
    mutationFn: createSubCategory,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      setSuccess(data.message)
      setSubcategoryName('')
      setSelectedCategoryId('')
    },
    onError: () => {
      setError('Error al crear subcategoría')
    },
  })

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!categoryName.trim()) {
      setError('Nombre de la categoría es requerido')
      return
    }
    createCategoryMutation.mutate({ name: categoryName })
  }

  const handleCreateSubcategory = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!subcategoryName.trim()) {
      setError('Nombre de la subcategoría es requerido')
      return
    }
    if (!selectedCategoryId) {
      setError('Selecciona una categoría')
      return
    }
    createSubcategoryMutation.mutate({ name: subcategoryName, categoryId: selectedCategoryId })
  }

  const handleSelectCategory = (value: string) => {
    setSelectedCategoryId(value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
      setSuccess('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [error, success])

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error al cargar categorías</div>

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Categorías</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="category" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="category">Crear Categoría</TabsTrigger>
            <TabsTrigger value="subcategory">Crear Subcategoría</TabsTrigger>
          </TabsList>
          <TabsContent value="category">
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <Label htmlFor="categoryName">Nombre de la categoría</Label>
                <Input
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Ingresa el nombre de la categoría"
                />
              </div>
              <Button type="submit" className="w-full">Crear categoría</Button>
            </form>
          </TabsContent>
          <TabsContent value="subcategory">
            <form onSubmit={handleCreateSubcategory} className="space-y-4">
              <div>
                <Label htmlFor="parentCategory">Categoría</Label>
                <Select onValueChange={handleSelectCategory} value={selectedCategoryId}>
                  <SelectTrigger id="parentCategory">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((category: any) => (
                 <SelectItem key={category.id} value={category.id.toString()}>
                 {category.name}
               </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subcategoryName">Nombre de la Subcategoría</Label>
                <Input
                  id="subcategoryName"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                  placeholder="Ingresa el nombre de la subcategoría"
                />
              </div>
              <Button type="submit" className="w-full">Crear Subcategoría</Button>
            </form>
          </TabsContent>
        </Tabs>
        {error && (
          <Alert variant="destructive" className="mt-4 bg-red-300 bg-opacity-20 border border-red-800 text-red-800 font-bold">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="default" className="mt-4 bg-blue-300 bg-opacity-20 border border-blue-600 text-blue-500 font-bold">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}